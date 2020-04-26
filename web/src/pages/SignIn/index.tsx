import React, { useRef, useCallback, useContext } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import * as yup from 'yup';

import logoImg from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { AuthContext } from '../../contexts/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import { Container, Content, Background } from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { user, signIn } = useContext(AuthContext);

  console.log(user);

  const handleSubmit = useCallback(
    (data: SignInFormData) => {
      formRef.current?.setErrors({});

      const schema = yup.object().shape({
        email: yup
          .string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: yup.string().required('Senha obrigatória'),
      });

      schema
        .validate(data, { abortEarly: false })
        .then(() => signIn(data))
        .catch((err) => {
          formRef.current?.setErrors(getValidationErrors(err));
        });
    },
    [signIn],
  );

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu login</h1>

          <Input name="email" icon={FiMail} placeholder="E-mail" />

          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Entrar</Button>

          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <a href="create">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
