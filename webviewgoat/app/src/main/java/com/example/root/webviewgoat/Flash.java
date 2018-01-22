package com.example.root.webviewgoat;

import android.hardware.Camera;
import android.os.SystemClock;

import java.util.List;


public class Flash {
    Camera c;

    public void turnOn (int milisec) {
        c = Camera.open();
        Camera.Parameters p = c.getParameters();
        p.setFlashMode(Camera.Parameters.FLASH_MODE_TORCH);
        c.setParameters(p);
        c.startPreview();
        SystemClock.sleep(milisec);

        p.setFlashMode(Camera.Parameters.FLASH_MODE_OFF);
        c.setParameters(p);
        c.stopPreview();
        c.release();
    }


    public void turnOff (int milisec) {
        SystemClock.sleep(milisec);
    }

    public void powerOn(){
        c = Camera.open();
        Camera.Parameters p = c.getParameters();
        p.setFlashMode(Camera.Parameters.FLASH_MODE_TORCH);
        c.setParameters(p);
        c.startPreview();
    }

    public void powerOff () {
        Camera.Parameters p = c.getParameters();
        p.setFlashMode(Camera.Parameters.FLASH_MODE_OFF);
        c.setParameters(p);
        c.stopPreview();
        c.release();
    }

}