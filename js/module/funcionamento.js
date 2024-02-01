export default class Funcionamento {
  constructor(funcionamento){
    this.funcionamento = document.querySelector(funcionamento);
  }
  
  dadosFuncionamento(){
    this.diaSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosAgora(){
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.grtUTChours() - 3;
  }

  estaAberto(){
    const semanaAberta = this.diaSemana.indexOf(this.diaAgora) !== -1;
    const horarioAberto =
      this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
      return semanaAberta && horarioAberto
  }

  ativaAberto(){
    if (this.estaAberto()){
      this.funcionamento.classList.add("aberto");
    }
  }

  init(){
    if (this.funcionamento){
      this.ativaAberto()
      this.dadosFuncionamento()
      this.dadosAgora()
    }
    return this
  }
}
