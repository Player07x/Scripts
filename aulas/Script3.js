var idade = 60
if (idade < 18) {
    console.log('Tem menos de 18 anos')
}
else if (idade < 24) {
    console.log('Menos de 24 anos')
}
else if (idade < 60) {
    console.log('Menos de 60 anos')
}
else {
    console.log('60 anos ou mais')
}

dia = 'noite'
switch (dia) {
    case 'manhã':
        console.log('Agora é manhã')
        break
    case 'meio-dia':
        console.log('Agora é meio-dia')
        break
    case 'tarde':
        console.log('Agora é a tarde')
        break
    case 'noite':
        console.log('Agora é noite')
        break
    default:
        console.log('O horário do dia não foi especificado')
}