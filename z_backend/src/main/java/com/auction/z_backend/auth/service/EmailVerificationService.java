package com.auction.z_backend.auth.service;

import java.util.Random;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import com.auction.z_backend.auth.dto.response.EmailVerificationOtpResponse;

@Service
public class EmailVerificationService {
    private final JavaMailSender mailSender; 

    public EmailVerificationService(JavaMailSender mailSender){
        this.mailSender = mailSender;
    }

    public EmailVerificationOtpResponse generateOtp(String email) {
        System.err.println("Gnerating OTP");
        String otp = generateRandomOtp();
        System.err.println("Generated Otp is : "+otp+"/nNow Sending the mail");
        try{

            sendOtpEmail(email, otp);
        }catch(Exception e){
            System.err.println("Error occured while sending the mail "+e.getMessage());
            return new EmailVerificationOtpResponse(email,"Error",e.getMessage());
        }
        System.err.println("Mail Sended");


        // saveOtpToDatabase(email, otp);
        return new EmailVerificationOtpResponse(email,otp, "OTP Generated Successfully");
    }

    // public OtpVerificationResponse verifyOtp(OtpVerificationRequest request) {
    //     OtpEntity storedOtp = otpRepository.findByEmailAndOtp(
    //         request.getEmail(), 
    //         request.getOtp()
    //     );

    //     if (storedOtp == null || isOtpExpired(storedOtp)) {
    //         return new OtpVerificationResponse(false, "Invalid or Expired OTP");
    //     }

    //     otpRepository.delete(storedOtp);
    //     return new OtpVerificationResponse(true, "OTP Verified Successfully");
    // }

    private String generateRandomOtp() {
        return String.format("%06d", new Random().nextInt(999999));
    }

    private void sendOtpEmail(String email, String otp) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(email);
        message.setSubject("Your OTP");
        message.setText("Your OTP is: " + otp);
        mailSender.send(message);
    }

    // private void saveOtpToDatabase(String email, String otp) {
    //     OtpEntity otpEntity = new OtpEntity();
    //     otpEntity.setEmail(email);
    //     otpEntity.setOtp(otp);
    //     otpEntity.setCreatedAt(LocalDateTime.now());
    //     otpRepository.save(otpEntity);
    // }

    // private boolean isOtpExpired(OtpEntity otpEntity) {
    //     return otpEntity.getCreatedAt()
    //         .isBefore(LocalDateTime.now().minusMinutes(OTP_VALIDITY_MINUTES));
    // }
}
