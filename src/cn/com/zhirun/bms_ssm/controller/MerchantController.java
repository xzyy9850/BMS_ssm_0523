package cn.com.zhirun.bms_ssm.controller;


import cn.com.zhirun.bms_ssm.model.MerchantModel;
import cn.com.zhirun.bms_ssm.model.SelectResult;
import cn.com.zhirun.bms_ssm.model.TestModel;
import cn.com.zhirun.bms_ssm.service.IMerchantService;
import cn.com.zhirun.bms_ssm.util.CurrentDate;
import cn.com.zhirun.bms_ssm.util.IdBuild;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpSession;
import java.util.Locale;

@Controller
public class MerchantController {

    @Autowired
    IMerchantService merchantServiceImpl;
    @Autowired
    HttpSession session;

    @Autowired
    ApplicationContext applicationContext;


    @ResponseBody
    @RequestMapping("/selectAllMerchant")
    public SelectResult selectAllMerchantByCondition(MerchantModel merchantModel, SelectResult selectResult, TestModel testModel){

        session.setAttribute("condition",merchantModel);
        selectResult = merchantServiceImpl.selectAllMerchantByCondition(merchantModel);
        return selectResult;
    }

    @ResponseBody
    @RequestMapping("/selectMerchant")
    public SelectResult selectMerchant(MerchantModel condition, SelectResult selectResult){
        MerchantModel merchant=(MerchantModel) session.getAttribute("condition");
        merchant.setPagination(condition.getPagination());
        merchant.setRownumber(condition.getRownumber());
        selectResult = merchantServiceImpl.selectAllMerchantByCondition(merchant);
        return selectResult;
    }

    @ResponseBody
    @RequestMapping("/deleteMerchant")
    public int deleteMerchant(@RequestParam("checks[]") String[] checks){
        int flg=0;
        flg= merchantServiceImpl.updateDeleflg(checks);
        return flg;
    }


    @ResponseBody
    @RequestMapping("/getNowMerchant")
    public MerchantModel getNowMerchant(String sid){
     return merchantServiceImpl.selectMerchantBySid(sid);
    }
    @ResponseBody
    @RequestMapping("/updateMerchant")
    public int updateMerchant(MerchantModel merchantModel){
        return merchantServiceImpl.updateMerchant(merchantModel);
    }


    @ResponseBody
    @RequestMapping("/insertMerchant")
    public int addMerchant(MerchantModel merchantModel){

        return merchantServiceImpl.insertMerchant(merchantModel);
    }

    @RequestMapping("/testLanguage")
    public ModelAndView testLanguage(String username,Locale locale){

        Object[] objects = new Object[1];
        objects[0] = username;
        String result =
        applicationContext.getMessage("login",objects,locale);
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("res",result);
        modelAndView.setViewName("res");
        return modelAndView;
    }

    @RequestMapping("/changeLanguage")
    public String changeLanguage(){
        return "forward:/jsp/testLanguage.jsp";
    }
}
