package cn.com.zhirun.bms_ssm.service.impl;

import cn.com.zhirun.bms_ssm.dao.MerchantModelMapper;
import cn.com.zhirun.bms_ssm.model.MerchantModel;
import cn.com.zhirun.bms_ssm.model.SelectResult;
import cn.com.zhirun.bms_ssm.service.IMerchantService;
import cn.com.zhirun.bms_ssm.util.CurrentDate;
import cn.com.zhirun.bms_ssm.util.IdBuild;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MerchantServiceImpl implements IMerchantService {

    @Autowired
    MerchantModelMapper merchantModelMapper;

    @Override
    public SelectResult selectAllMerchantByCondition(MerchantModel merchantModel){
        SelectResult selectResult =new SelectResult();
        merchantModel.setPagrow(merchantModel.getRownumber()*merchantModel.getPagination());
        List<MerchantModel> merchantModelList =merchantModelMapper.selectAllMerchantByCondition(merchantModel);
        selectResult.setMerchantList(merchantModelList);
        int count = merchantModelMapper.selectAll(merchantModel);
        selectResult.setCount(count);
        return selectResult;
    }
    @Override
    public int updateDeleflg( String[] checks){
        int count =0;
        for (String sid:checks
             ) {
            merchantModelMapper.updateDeleflg(sid);
            count++;
        }
        return count;
    }

    @Override
    public MerchantModel selectMerchantBySid(String sid) {
        return merchantModelMapper.selectMerchantBySid(sid);
    }

    @Override
    public int updateMerchant(MerchantModel merchantModel){
        merchantModel.setUpddate(CurrentDate.showtime());
        return merchantModelMapper.updateMerchant(merchantModel);
    }
    @Override
    public  int insertMerchant(MerchantModel merchantModel){
        merchantModel.setSid(IdBuild.idBulid());
        String creDate =CurrentDate.showtime();
        merchantModel.setCredate(creDate);
        merchantModel.setUpddate(creDate);
        merchantModel.setDeleflg(0);
        merchantModel.setComments("");
        return merchantModelMapper.insertMerchant(merchantModel);
    }
}
