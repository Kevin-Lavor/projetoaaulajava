function showPass() {
    var y = document.getElementById("password2");
    var x = document.getElementById("password");
    if (x.type === "password") {
      y.type = "text";
      x.type = "text";
      document.getElementById("showPassword").value = 'Esconder senha';
    } else {
      x.type = "password";
      y.type = "password";
      document.getElementById("showPassword").value = 'Mostrar senha';
    }
  
  }
  function verificarSenha(password, password2) {

    if (password !== password2) {
      return 'As senhas não são iguais.';
    }
  

    if (password.lenght < 6) {
      return 'A senha deve ter no mínimo 6 dígitos.';
    }

    const caractereEspecialRegex = /[_@#$%&*]/;
    if (!caractereEspecialRegex.test(password)) {
      return 'A senha deve conter no mínimo um caractere especial (_,@,#,$,%,&,*).';
    }
  

    const letraMaiusculaRegex = /[A-Z]/;
    if (!letraMaiusculaRegex.test(password)) {
      return 'A senha deve conter no mínimo uma letra maiúscula.';
    }
  

    const letraMinusculaRegex = /[a-z]/;
    if (!letraMinusculaRegex.test(password)) {
      return 'A senha deve conter no mínimo uma letra minúscula.';
    }
  

    const numeroRegex = /[0-9]/;
    if (!numeroRegex.test(password)) {
      return 'A senha deve conter no mínimo um número.';
    }
  
    
    const caracterRepetidosRegex = /(.)\1\1/;
    if (caracterRepetidosRegex.test(password)) {
      return 'A senha não pode conter 3 caracteres repetidos.';
    }
  

    const sequenciaNumericaRegex = /(123|234|345|456|567|678|789|098|987|876|765|654|543|432|321)/;
    if (sequenciaNumericaRegex.test(password)) {
      return 'A senha não pode conter sequência de números (ex: 123, 789).';
    }
  
    const sequenciaDecrescenteRegex = /(321|432|543|654|765|876|987|890|789|678|567|456|345|234|123)/;
    if (sequenciaDecrescenteRegex.test(password)) {
      return 'A senha não pode conter sequência decrescente de números (ex: 321, 987).';
    }
  
    return 'Nome dos Criadores, OK!!';
  }
  
  const password = document.getElementById("password2");
  const password2 = document.getElementById("password");
  
  const resultado = verificarSenha(password, password2);
  alert(resultado);