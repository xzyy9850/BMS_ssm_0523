package cn.com.zhirun.bms_ssm.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class IdBuild {
    public static String idBulid(){
        Date date = new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMddHHmmss");
        String timestamp = sdf.format(date);
        timestamp ="ZY"+timestamp;
        return timestamp;
    }
}