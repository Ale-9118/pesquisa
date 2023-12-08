import styles from './Cadastro.module.css'

function Cadastro(){
    return(
        <div className={styles.geral}>

        <form>
            <fieldset>
                <legend><b>Formulário para Cadastro</b></legend>
           <br/>

            <div className={styles.input_box}>
                <label className={styles.label_geral} for="name">Nome Completo</label>
                <input type="text" id="name" className={styles.input_user} required/>
            </div>

            <br/>

            <div className={styles.input_box}>
                <label className={styles.label_geral} htmlFor="telefone">Contato</label>
                <input type="tel" id="telefone" className={styles.input_user} required/>
            </div>

            <br/>

            <div className={styles.input_box}>
                <label className={styles.label_geral} htmlFor="email">E-mail</label>
                <input type="email" id="email" className={styles.input_user} required/>
            </div>

            <br/>

            <div className={styles.input_box}>
                <label className={styles.label_geral} for="cidade">Cidade</label>
                <input type="text" id="cidade" className={styles.input_user} required/>
            </div>

            <br/>

            <div className={styles.input_box}>
                <label className={styles.label_geral} for="estado">Estado</label>
                <input type="text" id="estado" className={styles.input_user} required/>
            </div>

            <br/>
            <div className={styles.submit}>
            <input type="submit" name="submit" id="submit"/>
            </div>
       
        </fieldset>
        </form>
    </div>
    );
}
export default Cadastro;