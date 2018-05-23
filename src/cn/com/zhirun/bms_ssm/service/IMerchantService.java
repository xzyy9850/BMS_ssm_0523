package cn.com.zhirun.bms_ssm.service;

import cn.com.zhirun.bms_ssm.model.MerchantModel;
import cn.com.zhirun.bms_ssm.model.SelectResult;

public interface IMerchantService {

    public SelectResult selectAllMerchantByCondition(MerchantModel merchantModel);
    public int updateDeleflg(String[] checks);
    public MerchantModel selectMerchantBySid(String sid);
    public int updateMerchant(MerchantModel merchantModel);
    public int insertMerchant(MerchantModel merchantModel);
}
