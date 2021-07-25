
$(function(){
    const padrao = `
        <h1>Cadastro de clientes</h1>
        <form id="cliForm">
            <label>
                Nome completo:
                <input type="text" name="nome" placeholder="Nome completo" required/>
            </label>
            <label>
                CPF:<br/>
                <input type="text" name="cpf" class="onlyNumbers" placeholder="(apenas números)" maxlength="11" required/>
            </label>
            <label>
                Data de nascimento:<br/>
                <input type="date" name="nascimento" class="onlyNumbers" placeholder="DD/MM/AAAA" maxlength="8"required/>
            </label>
            <label>
                Rua:<br/>
                <input type="text" name="rua" placeholder="Rua, Número" required/>
            </label>
            <label>
                N°:<br/>
                <input type="text" name="casa" class="onlyNumbers" placeholder="número da residência" required/>
            </label>
            <label>
                Bairro:<br/>
                <input type="text" name="bairro" placeholder="Bairro" required/>
            </label>
            <label>
                Cidade:<br/>
                <input type="text" name="cidade" placeholder="Cidade" required/>
            </label>
            <label>
                Email:<br/>
                <input type="text" name="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required/>
            </label>
            <label>
                Telefone:<br/>
                <input type="text" name="telefone" class="onlyNumbers" placeholder="DDD + telefone (apenas números)" maxlength="11"required/>
            </label>
            <button type="submit" id="addClient"><span class="bi bi-check-circle"></span>  Cadastrar</button>
            <button type="button" id="cleanStorage"><span class="bi bi-check-circle"></span>  Limpar dados</button>
        </form>
    `;

    const produto = `
        <h1>Cadastro de produtos</h1>
        <form id="prodForm">
            <label>
                Nome do produto:
                <input type="text" name="nomeProduto" placeholder="Nome do produto" required/>
            </label>
            <label>
                Marca:<br/>
                <input type="text" name="marca" placeholder="Marca do produto" required/>
            </label>
            <label>
                Preço:<br/>
                <input type="text" name="preco" inputmode="numeric" id="myInput" value="0,00" required/>
            </label>
            <label>
                Descrição:<br/>
                <textarea name="descricao" rows="10" cols="40" placeholder="Descrição" required></textarea>
            </label>
            <button type="submit" id="addProd"><span class="bi bi-check-circle"></span>  Cadastrar</button>
            <button type="button" id="cleanStorage"><span class="bi bi-check-circle"></span>  Limpar dados</button>
        </form>
    `;


    $('.content').html(padrao);


    $("p").on("click",function (event) {
        if (event.target.id === 'clientes') {
            $('.content').html(padrao);
        } else {
            $('.content').html(produto);
        }
    });

    $('#addClient').on("click",function (event) {
        let obj = getFormAsAObject($('#cliForm'));
        localStorage.setItem('nome',obj.nome);
        localStorage.setItem('cpf',obj.cpf);
        localStorage.setItem('nascimento',obj.nascimento);
        localStorage.setItem('rua',obj.rua);
        localStorage.setItem('casa',obj.casa);
        localStorage.setItem('bairro',obj.bairro);
        localStorage.setItem('cidade',obj.cidade);
        localStorage.setItem('email',obj.email);
        localStorage.setItem('telefone',obj.telefone);
    });

    $('#addProd').on("click",function (event) {
        let obj = getFormAsAObject($('#prodForm'));
        localStorage.setItem('nomeProduto',obj.nomeProduto);
        localStorage.setItem('marca',obj.marca);
        localStorage.setItem('preco',obj.preco);
        localStorage.setItem('descricao',obj.descricao);
    });

    $('#cleanStorage').on("click",function (event) {
        localStorage.clear();
    });

    function getFormAsAObject(form){
        let formData = form.serializeArray();
        obj = {};
        $.map(formData, function(n){
            obj[n['name']] = n['value'];
        }); 

        return obj
    }

    function checkKeyPressed(event){
        const keycode = (event.keyCode ? event.keyCode : event.which);
        if ((keycode >= '48') && (keycode <= '57')) {
            return true;
        } else {
            return false;
        }
    }

    $('.onlyNumbers').on("keypress",function (event) {
        if (checkKeyPressed(event)){
            return true;
        }else{
            return false;
        }
    });
});