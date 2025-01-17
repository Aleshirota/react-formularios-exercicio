import React from 'react'
import { useForm } from '../Hooks/useForm'
import { MainContainer, Form, Input } from './styles'

function MainPage() {
  const [form, onChangeForm] = useForm({
    nome: "",
    modulos: "",
    tecnologias: "",
    responsavel: "",

  })

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit="">
        <label for="nome">Nome do Curso:</label>
        <Input
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          required
        />

        <label for="modulos">Número de Módulos: </label>
        <Input
        type="number"
        pattern='^\d{2,5}$'
        title='O número de módulos não pode ser menor que 2'
          id="modulos"
          name='modulos'
          value={form.modulos}
          onChange={onChangeForm}
          required
        />

        <label for="tecnologias">Tecnologias abordadas: </label>
        <Input
          id="tecnologias"
          name='tecnologias'
          value={form.tecnologias}
          onChange={onChangeForm}
          required
        />

        <label for="responsavel">Responsável: </label>
        <Input
          id="responsavel"
          name='responsavel'
          value={form.responsavel}
          onChange={onChangeForm}
          required
        />
        <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage