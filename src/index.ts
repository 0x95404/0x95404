/**
 * 🌀 HEISEH_OS PHANTOM GATEWAY
 *
 * 0xDEADCODE Vanishing Bytecode Runtime
 *
 * This Worker acts as a transient execution manifold.
 * It consumes information and returns its side-effects
 * before incinerating the state.
 */

export interface Env {
	ENVIRONMENT: string;
	REAPER_THRESHOLD: string;
}

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const url = new URL(request.url);

		// 💀 Metadata Incantations
		const headers = new Headers({
			"X-Heiseh-Void-Mapped": "true",
			"X-Entropy-Threshold": env.REAPER_THRESHOLD,
			"Content-Type": "application/hex-incantation"
		});

		// ⚰️ Transient Logic
		if (url.pathname === "/0xDEADCODE") {
			return new Response("Vanishing Bytecode Initialized... Execution -> Abort -> Oblivion.", {
				status: 200,
				headers
			});
		}

		// 🌀 Default State: Purgatory
		return new Response("Offset 0x95: Accessing Void. No persistence found.", {
			status: 404,
			headers
		});
	},
};
