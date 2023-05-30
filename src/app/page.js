'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import {FiPause, FiPlay, FiRefreshCw, FiVolume2, FiVolumeX } from 'react-icons/fi';

export default function Home() {
	const [isActive, setIsActive] = useState(false);
	const [isPaused, setIsPaused] = useState(true);
	const [time, setTime] = useState(0);
	const [tickingSoundMuted, setTickingSoundMuted] = useState(false);

	useEffect(() => {
		let interval = null;

		if (isActive && isPaused === false) {
			interval = setInterval(() => {
				setTime((time) => time + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused]);

	useEffect(() => {
		let interval = null;
		let tickingSound = new Audio('/sfx/tick.mp3');

		if (isActive && isPaused === false && tickingSoundMuted === false) {
			interval = setInterval(() => {
				tickingSound.play();
			}, 1000);
		} else {
			clearInterval(interval);
		}
		return () => {
			clearInterval(interval);
		};
	}, [isActive, isPaused, tickingSoundMuted]);

	const handleStart = () => {
		setIsActive(true);
		setIsPaused(false);
	};

	const handlePauseResume = () => {
		setIsPaused(!isPaused);
	};

	const handleReset = () => {
		setIsActive(false);
		setTime(0);
	};

	const handleTickingSound = () => {
		setTickingSoundMuted(!tickingSoundMuted);
	}

	return (
		<>
			<main className={styles.main}>
				<div className={styles.flex}>
					<div className={styles.box}>
						<p className={styles.time_text} id={'minutes'}>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}</p>
					</div>
					<div className={styles.box}>
						<p className={styles.time_text}>:</p>
					</div>
					<div className={styles.box}>
						<p className={styles.time_text} id={'seconds'}>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</p>
					</div>
				</div>
				<br />
				<div className={styles.flex}>
					<div className={styles.box}>
						<button className={styles.btn} id={'mute'} onClick={handleTickingSound}>
							{
								tickingSoundMuted ?
								<FiVolumeX />
								: 
								<FiVolume2 />
							}
						</button>
					</div>
					{
						isActive ?
							<>
								<div className={styles.box}>
									<button className={styles.btn} id={'pause-resume'} onClick={handlePauseResume}>
										{
											isPaused ? <FiPlay /> : <FiPause />
										}
									</button>
								</div>
							</>
							:
							<>
								<div className={styles.box}>
									<button className={styles.btn} id={'start'} onClick={handleStart}><FiPlay /></button>
								</div>
							</>
					}
					<div className={styles.box}>
						<button className={styles.btn} id={'reset'} onClick={handleReset}><FiRefreshCw /></button>
					</div>
				</div>
			</main>
		</>
	)
}

/*
			{
				tasksModalOpen ?
					<>
						<div className={styles.modal}>
							<div className={styles.modal_content}>
								<div className={styles.flex}>
									<span className={styles.modal_title}>Tasks</span>
									<span className={styles.btn} onClick={handleTaskModal}><FiX /></span>
								</div>
								<div className={styles.flex}>
									<input type={'text'} className={styles.input} maxLength={100} id={'task-name'} placeholder={'Enter your task...'} />
									<button className={styles.btn}><FiPlus /></button>
								</div>
							</div>
						</div>
					</>
					: null
			}
			*/
