package cn.com.zhirun.bms_ssm.service.impl;


import cn.com.zhirun.bms_ssm.dao.UserModelMapper;
import cn.com.zhirun.bms_ssm.model.UserModel;
import cn.com.zhirun.bms_ssm.service.IUserService;
import cn.com.zhirun.bms_ssm.util.CurrentDate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    UserModelMapper userModelMapper;


    @Override
    public int selectUserByNameAndPassword(UserModel userModel){
        return userModelMapper.selectUserByNameAndPassword(userModel);
    }
    @Override
    public int selectUserByName(UserModel userModel){
        return userModelMapper.selectUserByName(userModel);
    }
    @Override
    public  int insertUser(UserModel userModel){
        String creTime =CurrentDate.showtime();
        userModel.setCredate(creTime);
        userModel.setUpddate(creTime);
        userModel.setDeleflg(0);
        userModel.setComments("");
        return userModelMapper.insertUser(userModel);
    }
}
