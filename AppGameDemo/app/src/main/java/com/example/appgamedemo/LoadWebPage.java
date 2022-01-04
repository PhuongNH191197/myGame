package com.example.appgamedemo;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.webkit.WebView;

public class LoadWebPage extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_load_web_page);
        String url = "https://elcomgame04012022.herokuapp.com";
        WebView view = (WebView) findViewById(R.id.playGame);
        view.loadUrl(url);
    }
}