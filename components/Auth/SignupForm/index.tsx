import dynamic from 'next/dynamic'
import TasksLoadingAnimation from '@/common/TasksLoadingAnimation/TasksLoadingAnimation'

const LoginFormWithNoSSR = dynamic(() => import('./SignupForm'), {
  ssr: false,
  loading: () => <TasksLoadingAnimation />,
})

const MainPage = () => {
  return (
    <div>
      <LoginFormWithNoSSR />
    </div>
  )
}

export default MainPage
