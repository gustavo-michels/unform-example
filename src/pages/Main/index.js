import React, { Component } from 'react';

import { Form, Input, Scope } from '@rocketseat/unform';
import axios from 'axios';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import api from '../../services/api';

import 'react-toastify/dist/ReactToastify.css';

import { Container } from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(5, 'Informe seu nome completo')
    .required('Nome é obrigatório'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail é obrigatório'),
  doc: Yup.string()
    .min(11, 'CPF deve ter no mínimo 11 dígitos.')
    .required('CPF / CNPJ é obrigatório'),
  shipping_address: Yup.object().shape({
    zip_code: Yup.string()
      .min(8, 'CEP deve ter no mínimo 8 dígitos.')
      .required('CEP é obrigatório'),
    number: Yup.string().required('Número é obrigatório'),
    complement: Yup.string(),
    address_district: Yup.string().required('Bairro é obrigatório'),
    address: Yup.string().required('Logradouro é obrigatório'),
    city: Yup.string().required('Cidade é obrigatório'),
    state: Yup.string().required('UF é obrigatório'),
  }),
});

export default class Main extends Component {
  state = {
    initialData: {},
  };

  async componentDidMount() {
    const res = await api.get('profile.json');
    this.setState({ initialData: res.data });
  }

  render() {
    const { initialData } = this.state;
    const handleSubmit = async (data) => {
      try {
        await api.put('profile.json', data);
        await api.post('history.json', data);
        toast.success('Perfil atualizado com sucesso!');
      } catch (err) {
        toast.error('Erro ao persistir os dados.');
        console.error(err);
      }
    };

    const findCep = async (cep) => {
      const res = await axios.get(`http://viacep.com.br/ws/${cep}/json`);
      document.getElementById('shipping_address.address_district').value = res.data.bairro;
      document.getElementById('shipping_address.address').value = res.data.logradouro;
      document.getElementById('shipping_address.complement').value = res.data.complemento;
      document.getElementById('shipping_address.city').value = res.data.localidade;
      document.getElementById('shipping_address.state').value = res.data.uf;
    };

    return (
      <>
        <Container>
          <Form schema={schema} initialData={initialData} onSubmit={handleSubmit}>
            <h1>Alterar Perfil</h1>
            <section>
              <div>
                <label htmlFor="name">Nome</label>
                <Input name="name" id="name" />
              </div>
            </section>
            <section>
              <div>
                <label htmlFor="email">E-mail</label>
                <Input name="email" id="email" />
              </div>
            </section>
            <section>
              <div>
                <label htmlFor="doc">CPF / CNPJ</label>
                <Input name="doc" type="tel" pattern="[0-9.-/]*" id="doc" />
              </div>
            </section>
            <Scope path="shipping_address">
              <section>
                <div>
                  <label htmlFor="shipping_address.zip_code">CEP</label>
                  <Input name="zip_code" id="zip_code" onBlur={evt => findCep(evt.target.value)} />
                </div>
                <div>
                  <label htmlFor="number">Número</label>
                  <Input name="number" type="number" id="number" />
                </div>
                <div>
                  <label htmlFor="complement">Complemento</label>
                  <Input name="complement" id="complement" />
                </div>
                <div>
                  <label htmlFor="address_district">Bairro</label>
                  <Input name="address_district" id="address_district" />
                </div>
              </section>
              <section>
                <div>
                  <label htmlFor="address">Logradouro</label>
                  <Input name="address" id="address" />
                </div>
                <div>
                  <label htmlFor="city">Cidade</label>
                  <Input name="city" id="city" disabled />
                </div>
                <div>
                  <label htmlFor="state">UF</label>
                  <Input name="state" id="state" disabled />
                </div>
              </section>
            </Scope>
            <button type="submit">Salvar</button>
          </Form>
        </Container>
        <ToastContainer />
      </>
    );
  }
}
