package cn.com.zhirun.bms_ssm.model;

public class MerchantModel {
    private Integer id;

    private String sid;

    private String sname;

    private String stel;

    private String sclassify;

    private String saddress;

    private String detailadd;

    private Float consumption;

    private Integer deleflg;

    private String credate;

    private String upddate;

    private String comments;

    private Float lowconsumption;

    private Float highconsumption;

    private Integer pagination;
    private Integer rownumber ;
    private Integer pagrow;


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid == null ? null : sid.trim();
    }

    public String getSname() {
        return sname;
    }

    public void setSname(String sname) {
        this.sname = sname == null ? null : sname.trim();
    }

    public String getStel() {
        return stel;
    }

    public void setStel(String stel) {
        this.stel = stel == null ? null : stel.trim();
    }

    public String getSclassify() {
        return sclassify;
    }

    public void setSclassify(String sclassify) {
        this.sclassify = sclassify == null ? null : sclassify.trim();
    }

    public String getSaddress() {
        return saddress;
    }

    public void setSaddress(String saddress) {
        this.saddress = saddress == null ? null : saddress.trim();
    }

    public String getDetailadd() {
        return detailadd;
    }

    public void setDetailadd(String detailadd) {
        this.detailadd = detailadd == null ? null : detailadd.trim();
    }

    public Float getConsumption() {
        return consumption;
    }

    public void setConsumption(Float consumption) {
        this.consumption = consumption;
    }

    public Integer getDeleflg() {
        return deleflg;
    }

    public void setDeleflg(Integer deleflg) {
        this.deleflg = deleflg;
    }

    public String getCredate() {
        return credate;
    }

    public void setCredate(String credate) {
        this.credate = credate == null ? null : credate.trim();
    }

    public String getUpddate() {
        return upddate;
    }

    public void setUpddate(String upddate) {
        this.upddate = upddate == null ? null : upddate.trim();
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments == null ? null : comments.trim();
    }

    public Float getLowconsumption() {
        return lowconsumption;
    }

    public void setLowconsumption(Float lowconsumption) {
        this.lowconsumption = lowconsumption;
    }

    public Float getHighconsumption() {
        return highconsumption;
    }

    public void setHighconsumption(Float highconsumption) {
        this.highconsumption = highconsumption;
    }

    public Integer getPagination() {
        return pagination;
    }

    public void setPagination(Integer pagination) {
        this.pagination = pagination;
    }

    public Integer getRownumber() {
        return rownumber;
    }

    public void setRownumber(Integer rownumber) {
        this.rownumber = rownumber;
    }
    public void setPagrow(Integer pagrow){
        this.pagrow=pagrow;
    }
    public Integer getPagrow(){
        return pagrow;
    }
}