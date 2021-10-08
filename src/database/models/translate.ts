import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Incorporation } from '../../features/incorporation/incorporation.model';

@Table
export class Translate extends Model {
    @ForeignKey(() => Incorporation)
    @Column({ unique: 'translate_key_language' })
    key: string;

    @Column({ unique: 'translate_key_language' })
    languageId: number;

    @Column
    value: string;
}
