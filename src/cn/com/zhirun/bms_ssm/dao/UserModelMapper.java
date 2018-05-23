package cn.com.zhirun.bms_ssm.dao;

import cn.com.zhirun.bms_ssm.model.UserModel;
import java.util.List;

public interface UserModelMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(UserModel record);

    UserModel selectByPrimaryKey(Integer id);

    List<UserModel> selectAll();

    int updateByPrimaryKey(UserModel record);

    int selectUserByNameAndPassword(UserModel userModel);

    int selectUserByName(UserModel userModel);

    int insertUser(UserModel userModel);
}