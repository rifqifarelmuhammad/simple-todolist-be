import { Injectable } from '@nestjs/common';
import { FirebaseService } from 'src/firebase/firebase.service';
import { User } from 'src/models/user';
import { AuthError, createUserWithEmailAndPassword, signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { setDoc, DocumentReference, doc, getDoc, DocumentSnapshot, DocumentData } from 'firebase/firestore';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { Res } from '@nestjs/common';

@Injectable()
export class AuthService {
    constructor(private firebaseService: FirebaseService){}

    public async login(email: string, password: string, @Res({ passthrough: true }) response): Promise<Omit<User, 'password'>>{
        try{
            const userCredential: UserCredential = await signInWithEmailAndPassword(this.firebaseService.auth, email, password);

            if (userCredential){
                const idUser: string = userCredential.user.uid;
                const docRef: DocumentReference = doc(this.firebaseService.usersCollection, idUser);

                const snapshot: DocumentSnapshot<DocumentData> = await getDoc(docRef);
                const dataUser: User = {...snapshot.data(), id: snapshot.id} as User;

                delete dataUser.password;

                response.cookie('uId', dataUser.id)

                return dataUser;
            }
        }catch(err: unknown){
            const firebaseError = err as AuthError;

            if (firebaseError.code == 'auth/wrong-password'){
                throw new HttpException('Email or password incorrect', HttpStatus.FORBIDDEN);
            }else if (firebaseError.code == 'auth/user-not-found'){
                throw new HttpException('Email not found', HttpStatus.NOT_FOUND);
            }
        }
    }

    public async register(body: Omit<User, 'id'>): Promise<void>{
        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(
                this.firebaseService.auth, body.email, body.password
            );
    
            if (userCredential){
                const id: string = userCredential.user.uid;
                const docRef: DocumentReference = doc(this.firebaseService.usersCollection, id);
                await setDoc(docRef, body);
            }
        }catch (err: unknown){
            const firebaseError = err as AuthError;
            
            if (firebaseError.code == 'auth/email-already-in-use'){
                throw new HttpException('Email already exists', HttpStatus.CONFLICT);
            }else if (firebaseError.code == 'auth/user-not-found'){
                throw new HttpException('Email not found', HttpStatus.NOT_FOUND);
            }
        }
    }
}
