import { Play } from "phosphor-react";
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput list="task-suggestions" id="task" placeholder="Dê um nome para o seu projeto" />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
            <option value="Projeto 4" />

          </datalist>

          <label htmlFor="minutesAmout">Durante</label>
          <MinutesAmountInput type="number" id="minutesAmout" placeholder="00"
          max={60} step="5" min={5}/>

          <span>minutos</span>
        </FormContainer>
    
        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24}/>
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}