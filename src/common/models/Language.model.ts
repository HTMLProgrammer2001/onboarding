import { Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
export class Language extends Model {
  @PrimaryKey
  @Column
  id: number;

  @Column
  name: string;

  @Column({ defaultValue: false })
  isDefault: boolean;
}
