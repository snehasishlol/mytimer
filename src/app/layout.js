import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MyTimer',
	description: 'A simple timer.',
	keywords: ['Timer', 'Stopwatch', 'MyTimer'],
	authors: [{ name: 'snehasish', url: 'https://snehasish.cf' }],
	colorScheme: 'dark',
	creator: 'snehasish',
	publisher: 'snehasish',
	openGraph: {
		title: 'MyTimer',
		description: 'A simple timer.',
		url: 'https://timer.snehasish.cf',
		siteName: 'MyTimer',
		images: [
			{
				url: '/media/mytimer.png',
				width: 400,
				height: 400,
			}
		],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon.ico',
		apple: '/media/mytimer.png',
	},
	themeColor: '#0e0e0e',
	twitter: {
		card: 'summary_large_image',
		title: 'MyTimer',
		description: 'A simple timer.',
		siteId: '',
		creator: '@snehasishlol',
		creatorId: '',
		images: ['/media/mytimer.png'],
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
