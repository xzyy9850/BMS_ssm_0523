package cn.com.zhirun.bms_ssm.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class CurrentDate {
    public static String showtime(){
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
        String timestamp = sdf.format(date);
        return timestamp;
    }
}
