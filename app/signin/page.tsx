'use client'
import { signIn } from "next-auth/react"

export default function Page() {
  return (
    <div className="flex flex-row gap-10 py-10">
      <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" onClick={() => signIn()}>Sign in (默认登录页)</button>
      <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" onClick={() => signIn('github')}>Sign in (github登录页)</button>
      <button className="py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors" onClick={() => signIn(undefined, { callbackUrl: '/' })}>Sign in (跳转回首页)</button>
    </div>
  )
}