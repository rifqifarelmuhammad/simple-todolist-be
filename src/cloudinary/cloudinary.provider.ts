import { v2 } from 'cloudinary';
import { CLOUDINARY } from './constants';

export const CloudinaryProvider = {
  provide: CLOUDINARY,
  useFactory: () => {
    return v2.config({
      cloud_name: 'decwxgqs5',
      api_key: '183971419469197',
      api_secret: 'p6DanPlkEKN0MWMoQJfwRQzcvfk',
    });
  },
};