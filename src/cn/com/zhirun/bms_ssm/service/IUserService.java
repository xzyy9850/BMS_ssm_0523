package cn.com.zhirun.bms_ssm.service;

import cn.com.zhirun.bms_ssm.model.UserModel;


public interface IUserService {
    public int selectUserByNameAndPassword(UserModel userModel);
    public int selectUserByName(UserModel userModel);
    public int  insertUser(UserModel userModel);
}
