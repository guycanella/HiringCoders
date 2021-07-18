interface Usuario{
    nome: string;
    email: string;
    address?: string;
}

function getUser(): Usuario{
    return {
        nome: 'Guilherme',
        email:'guilherme@canella.com'
    }
}

function setUser(usuario: Usuario){
    // ....
}