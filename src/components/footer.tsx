import Link from "next/link";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="font-sans relative pt-16 pb-3 md:pb-6">
            <div className="px-10">
                <hr className="my-3 md:my-6 border-purple-300" />
            </div>

            <div className="container mx-auto p-4">
                <div className="flex flex-wrap justify-between items-center">
                    <div className="flex w-full md:w-5/12">
                        <div className="text-2xl px-4">
                            <Link href="/" className="inline-flex items-center">
                                <Image
                                    width={50}
                                    height={50}
                                    src="/logo.png"
                                    alt="logo"
                                />
                                <span className="tracking-wide text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-light-purple">
                                    bugstore
                                </span>
                            </Link>

                            <p className="mt-2 mb-4 text-primary-grey tracking-wide text-sm font-medium">
                                A sua loja online de roupas e utilitários nerds.
                            </p>

                            <div className="flex-row my-4 space-x-1">
                                <a
                                    className="h-8 w-8 rounded-full outline-none focus:outline-none"
                                    type="button"
                                    target="_blank"
                                    href="https://www.linkedin.com/in/matheus-roberto-240726292/"
                                >
                                    <svg
                                        className="fill-current transition duration-700 ease-in-out text-purple-300 hover:text-medium-violet"
                                        role="img"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>LinkedIn</title>
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>

                                <a
                                    className="h-8 w-8 rounded-full outline-none focus:outline-none"
                                    type="button"
                                    target="_blank"
                                    href="https://github.com/black-adm"
                                >
                                    <svg
                                        className="fill-current transition duration-700 ease-in-out text-purple-300 hover:text-medium-violet"
                                        role="img"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <title>Github</title>
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="text-2xl px-4">
                        <span>
                            <Image
                                src="/ignite.png"
                                alt="logo do ignite"
                                width={100}
                                height={34}
                            />
                        </span>
                        <p className="mt-2 mb-4 text-primary-grey text-sm font-medium">
                            Rocketseat ©<span id="year"> 2023</span> -
                            Desenvolvido  por Matheus Roberto.
                        </p>

                        <div className="flex-row my-4 space-x-1">
                            <p className="text-primary-grey/40 tracking-wider text-xs font-medium">
                                Guarulhos, São Paulo - Brasil
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    )
}