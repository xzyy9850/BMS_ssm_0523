package cn.com.zhirun.bms_ssm.controller;


import cn.com.zhirun.bms_ssm.model.UserModel;
import cn.com.zhirun.bms_ssm.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@Controller
public class UserController {

    @Autowired
    IUserService userServiceImpl;

    @RequestMapping("/loginUser")
    public String selectUserByNameAndPassword(UserModel userModel, ModelAndView mv, HttpServletRequest request, HttpSession session){
        int flg=userServiceImpl.selectUserByNameAndPassword(userModel);
        int result;
        if(flg>0){
            result=3;
            session.setAttribute("loginuser",userModel.getName());
        }
        else {
            result=2;
            session.setAttribute("loginuser","");
        }
        request.setAttribute("result",result);
        return "result";
    }

    @ResponseBody
    @RequestMapping("/selectUser")
    public int selectUserByName(UserModel userModel){
        int flg = userServiceImpl.selectUserByName(userModel);
        return flg;
    }

    @RequestMapping("/registUser")
    public String insertUser(UserModel userModel,HttpServletRequest request){
        int flg=userServiceImpl.insertUser(userModel);
        int result;
        if(flg>0){
            result=1;
        }
        else {
            result=0;
        }
        request.setAttribute("result",result);
        return "result";
    }

}
