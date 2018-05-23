package cn.com.zhirun.bms_ssm.dao;

import cn.com.zhirun.bms_ssm.model.MerchantModel;
import java.util.List;

public interface MerchantModelMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(MerchantModel record);

    MerchantModel selectByPrimaryKey(Integer id);

//    List<MerchantModel> selectAll();


    int updateByPrimaryKey(MerchantModel record);

    List<MerchantModel> selectAllMerchantByCondition(MerchantModel merchantModel);
    int selectAll(MerchantModel merchantModel);

     int updateDeleflg(String sid);

     MerchantModel selectMerchantBySid(String sid);

     int updateMerchant(MerchantModel merchantModel);

     int insertMerchant(MerchantModel merchantModel);
}