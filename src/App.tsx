import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Text } from './components/Text';
import './styles/global.css';
import { Logo } from './svg/Logo';

export function App() {
  return (
    <div className="w-screen h-screen flex justify-center bg-black text-gray-100">
      <div className="bg-purple-700 lg:flex-1 flex justify-center items-end">
        <Logo />
      </div>
      <div className="flex-1 flex flex-col justify-center items-center p-12 space-y-6">
        <header className="flex flex-col items-center">
          <Heading size='lg'>
            Seja bem vindo 💜
          </Heading>
          <Text size='lg' className='text-gray-500 mt-2'>
            Faça login em sua conta
          </Text>
        </header>

        <form className="flex flex-col gap-4 items-stretch w-full max-w-sm">
          <label htmlFor="email" className="flex flex-col gap-1">
            <Text className="font-semibold">E-mail</Text>
            <Input.Root>
              <Input.Icon>
                <Envelope/>
              </Input.Icon>

              <Input.Input type="email" placeholder="Digite seu e-mail"/>
            </Input.Root>
          </label>

          <label htmlFor="password" className="flex flex-col gap-1">
            <Text className="font-semibold">Senha</Text>
            <Input.Root>
              <Input.Icon>
                <Lock />
              </Input.Icon>

              <Input.Input type="password" placeholder="Digite sua senha" />
            </Input.Root>
          </label>

          <Button type='submit'>Entrar</Button>
        </form>
      </div>
    </div>
  )
} 