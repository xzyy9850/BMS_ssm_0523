package cn.com.zhirun.bms_ssm.controller;


import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.commons.CommonsMultipartFile;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.URLEncoder;

@Controller
public class MyFileController {


    @RequestMapping("/uploadFile")
    public String uploadFile(@RequestParam("myf") CommonsMultipartFile[] tempFile,String username) {

        try {

            for (CommonsMultipartFile tempF:tempFile
                 ) {
                FileUtils.copyInputStreamToFile(tempF.getInputStream(), new File("E:\\MyIdea\\BMS_ssm\\" + tempF.getOriginalFilename()));
            }

        } catch (IOException e) {
            e.printStackTrace();
        }

        return "res";
    }


    @RequestMapping("/fileDownload")
     public void fileDownload(String filename, HttpServletResponse response){
        // 解决下载文件名中文乱码
        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html;charset=utf-8");
        try {
        File file = new File("E:\\MyIdea\\BMS_ssm\\"+filename);
        response.addHeader("content-disposition","attachment;filename="+
                URLEncoder.encode(filename,"UTF-8") );
            FileUtils.copyFile(file,response.getOutputStream());
        }catch (IOException e){
            e.printStackTrace();
        }
     }
}
