package cn.com.zhirun.bms_ssm.model;

public class UserModel {
    private Integer id;

    private String name;

    private String password;

    private Integer deleflg;

    private String credate;

    private String upddate;

    private String comments;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
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
}