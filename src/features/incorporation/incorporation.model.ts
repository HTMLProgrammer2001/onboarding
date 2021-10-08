import { Column, HasOne, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Translate } from '../../common/models/Translate.model';

@Table
export class Incorporation extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @HasOne(() => Translate, { sourceKey: 'name' })
  translate: Translate;
}
