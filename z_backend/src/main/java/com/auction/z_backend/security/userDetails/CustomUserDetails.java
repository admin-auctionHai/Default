package com.auction.z_backend.security.userDetails;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.auction.z_backend.common.enums.UserTypes;

public class CustomUserDetails implements UserDetails {
    private Long id;
    private String loginId;
    private String password;
    private UserTypes userType;
    private Collection<? extends GrantedAuthority> authorities;

    public CustomUserDetails(Long id, String loginId, String password, 
                           UserTypes userType, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.loginId = loginId;
        this.password = password;
        this.userType = userType;
        this.authorities = authorities;
    }

    // Implement UserDetails methods
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return loginId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Long getId() {
        return id;
    }

    public UserTypes getUserType() {
        return userType;
    }
}
