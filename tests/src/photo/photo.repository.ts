import { EntityRepository, Repository } from 'typeorm-steroids';
import { Photo } from './photo.entity';

@EntityRepository(Photo)
export class CustomPhotoRepository extends Repository<Photo> {}
