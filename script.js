$("#formValidation").validate({
  rules:{
    name:{
        minlength:2

    },
    email:true,
    phone: {
        number: true,
        minlength: 10,
        maxlength:10
    },
  },
  messages:{
    name:{
    required: "Please enter your name",
    minlength: "Name at least 2 charcaters"
    } ,
    email: "Please enter your email!",
    phone: "Enter that phone number!",
    subject: "Enter that subject!",
    formMessage: "Enter that Message!",
},

    submitHandler: function(form){
        form.submit();
    }
})