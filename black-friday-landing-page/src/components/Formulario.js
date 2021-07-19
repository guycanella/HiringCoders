import React from 'react';
import '../css/style.css'

class Formulario extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: '', email: '', soma: '' };

        this.handleSubmit = this.handleSubmit.bind(this);

        this.saveName  = (event) => this.setState({ nome: event.target.value });
        this.saveEmail = (event) => this.setState({ email: event.target.value });
        this.saveSum   = (event) => this.setState({ soma: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { nome, email, soma } = this.state;
        localStorage.setItem('nome', nome);
        localStorage.setItem('email', email);
        localStorage.setItem('soma', soma);
    }


    render() {
        return (
            <>
                <section>
                    <div id="left-div" className="section-div">Alguma coisa</div>
                    <div id="right-div" className="section-div">
                        <h2>SEJA O PRIMEIRO A SABER!</h2>
                        <p>Preencha o formulário abaixo e nós avisaremos você</p>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Nome*:<br />
                                <input type="text" value={this.state.nome} onChange={this.saveName} required /><br />
                            </label>
                            <label>
                                Email*:<br />
                                <input type="email" value={this.state.email} onChange={this.saveEmail} required /><br />
                            </label>
                            <label>
                                5 + 7 = ?*<br />
                                <input type="text" value={this.state.soma} onChange={this.saveSum} /><br />
                            </label>
                            <button id="btn" type="submit">Me avise!</button>
                        </form>
                    </div>
                </section>
            </>
        );
    }
}

export default Formulario;