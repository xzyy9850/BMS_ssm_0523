package cn.com.zhirun.bms_ssm.model;

import java.util.List;

public class SelectResult {

    public int count;
    public List<MerchantModel> merchantList;

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public List<MerchantModel> getMerchantList() {
        return merchantList;
    }

    public void setMerchantList(List<MerchantModel> merchantList) {
        this.merchantList = merchantList;
    }
}
