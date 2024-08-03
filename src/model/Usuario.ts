export class Usuario {
    uid: string;
    nome: string | null;
    email: string | null;
    tipo: string;
    imagemUrl: string | null;
    emailVerificado: boolean;
    numeroTelefone: string | null;

    constructor(
        uid: string,
        nome: string | null,
        email: string | null,
        tipo: string = "aluno",
        imagemUrl: string | null,
        emailVerificado: boolean = false,
        numeroTelefone: string | null,
    ) {
        this.uid = uid;
        this.nome = nome;
        this.email = email;
        this.tipo = tipo;
        this.imagemUrl = imagemUrl;
        this.emailVerificado = emailVerificado;
        this.numeroTelefone = numeroTelefone;
    }

    toObject(): object {
        return {
            uid: this.uid,
            nome: this.nome,
            email: this.email,
            tipo: this.tipo,
            imagemUrl: this.imagemUrl,
            emailVerificado: this.emailVerificado,
            numeroTelefone: this.numeroTelefone
        };
    }
}
