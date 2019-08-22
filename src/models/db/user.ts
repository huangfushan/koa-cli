/**
 * Created by huangfushan on 2019-08-22 12:21
 */

import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull } from 'sequelize-typescript';

@Table
export default class User extends Model<User>{
  @AutoIncrement
  @PrimaryKey
  @Column
  id: number;

  @AllowNull(false)
  @Column
  fullname: string;

  @Column
  password: string;

  @Column
  email: string;

}
