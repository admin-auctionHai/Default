package com.auction.z_backend.model;
// import lombok.setter;



public class LoginRequest {
    private String email;
    private String password;

    public String getEmail(){
        return this.email;
    }
    
    public String getPassword(){
        return this.password;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setPassword(String pass){
        this.password = pass;
    }

    public LoginRequest(LoginRequest object){
        this.email = object.getEmail();
        this.password = object.getPassword();
    }
}
