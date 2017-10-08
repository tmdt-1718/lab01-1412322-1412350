ActionMailer::Base.smtp_settings ={
    address:              'smtp.gmail.com',
    port:                 587,
    domain:               'gmail.com',
    user_name:            'thegearsweb@gmail.com',
    password:             ENV['GMAIL_PASS'],
    authentication:       'plain',
    enable_starttls_auto: true  
}