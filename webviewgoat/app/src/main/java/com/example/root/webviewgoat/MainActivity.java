package com.example.root.webviewgoat;

import android.content.Context;
import android.content.Intent;
import android.os.Environment;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.webkit.JavascriptInterface;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;
import com.google.zxing.integration.android.IntentIntegrator;
import com.google.zxing.integration.android.IntentResult;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.IOException;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {

    private Button buttonScan;
    private TextView textViewName, textViewAddress;
    private IntentIntegrator qrScan;

    String webviewURL = "http://192.168.1.1/qrcodes/";
    String link = "";  // it will be read from QRCodes

    WebView myWebView;
    WebSettings webSettings;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        buttonScan = (Button) findViewById(R.id.buttonScan);
        qrScan = new IntentIntegrator(this);
        buttonScan.setOnClickListener(this);

        myWebView = (WebView) findViewById(R.id.webview);
        webSettings = myWebView.getSettings();
        webSettings.setJavaScriptEnabled(true);
        myWebView.addJavascriptInterface(new WebAppInterface(this), "Android");
    }


    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        IntentResult result = IntentIntegrator.parseActivityResult(requestCode, resultCode, data);
        if (result != null) {
            if (result.getContents() == null) {
                Toast.makeText(this, "Error reading QRCode", Toast.LENGTH_LONG).show();
            } else {
                link = result.getContents().toString();
                myWebView.loadUrl(webviewURL);
            }
        } else {
            super.onActivityResult(requestCode, resultCode, data);
        }
    }


    @Override
    public void onClick(View view) {
        /* WE CAN'T TURN ON THE FLASH AND USE THE QRSCAN AT THE SAME TIME. FUTURE WORK!
        Flash f = new Flash();
        f.powerOn();*/
        qrScan.initiateScan();
    }


    public class WebAppInterface {
        Context mContext;

        WebAppInterface(Context c) {
            mContext = c;
        }

        @JavascriptInterface
        public String getURL() {
            return link;
        }


        // Here are functions to control the flash. The webview must allow javascript in order to turn the flash off.
        @JavascriptInterface
        public void flashOn(int m) {
            Flash f = new Flash();
            f.turnOn(m);
        }

        @JavascriptInterface
        public void flashOff(int m) {
            Flash f = new Flash();
            f.turnOff(m);
        }

        @JavascriptInterface
        public void flashPowerOn() {
            Flash f = new Flash();
            f.powerOn();
        }

        @JavascriptInterface
        public void flashPowerOff() {
            Flash f = new Flash();
            f.powerOff();
        }


        // This function reads content from files. We have to adapt it to read QRCode from filesystem. FUTURE WORK!!
        @JavascriptInterface
        public String readFile(String filename)
        {
            File sdcard = Environment.getExternalStorageDirectory();
            File file = new File(sdcard, filename);

            String result = new String();

            try {
                BufferedReader br = new BufferedReader(new FileReader(file));
                String line;

                while ((line = br.readLine()) != null) {
                    result = result + line + "\n";
                }
                br.close();
            }
            catch (IOException e) {
                result = "";
            }

            return result;
        }

    }
}