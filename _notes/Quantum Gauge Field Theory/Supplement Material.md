# Supplement Material

[toc]

## LSZ Reduction

First I want to address a question: why path integral can be used as a quantization scheme? 

- commutation relation such as $[\phi(x),\phi(y)]=\delta(x-y)$, LHS is the property of the field operator, RHS is where "quantization" comes from
- Path integral is actually another part of the foundation of quantum mechanics: wavefunction/state vector. It was first used to measure the transition amplitude

With LSZ reduction formula, the scattering amplitude can be evaluated with correlation function in vacuum.

The proof of LSZ formula can be seen in [LSZ约化公式（标量场） - 小时百科](https://wuli.wiki/online/LSZ.html) or Prof.Tan's handout, here I want to review some key steps in the proof.

- $P^\mu \tilde{\phi}(p)\ket{\Omega}=p^\mu\tilde{\phi}(p)\ket{\Omega}$, states with the same $p^2$ is equivalent regarding Lorentz transformation

- Basic ansatz in energy spectrum: the first excited states must be the single particle state on the shell:

  $p^2= m^2$, the many particle states must satisfy	$p^2\geq (2m)^2$, i.e. the continuum spectrum. Bound states are those $m^2\leq p^2\leq (2m)^2$.
  $$
  \tilde{\phi}(p)\ket{\Omega}=\eta(2\pi)^4\delta(p)\ket{\Omega}+2\pi\sqrt{Z}\delta(p^2-m^2)\theta(p^0)\ket{\vb{p}}
  $$

- The in states can be thought as many wavepackets which are separate when $T\approx-\infty$, its space distribution is describe by function F, while its time distribution is described by g(t-T).

  > F is a relativistic function and the width of g is far greater than $m^{-1}$,but g decays fast when $t-T>>0$.

- In this way , we assume that $\tilde{g}$ has a peak on shell.![image-20250228123610339](C:\Users\29338\AppData\Roaming\Typora\typora-user-images\image-20250228123610339.png)

- We can see the relation between scattering amplitude and correlation function in vacuum. And the correlation function can be evaluated using pathing integral by setting $T\rightarrow (1-i\epsilon)\infty$, then we only need to calculate $\mel{\phi_T}{\hat{O}}{\phi_{-T}}$

## Gauge Fixing

The Lagrangian 
$$
\mathcal{L}=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}=\frac{1}{2}A_\mu(g^{\mu\nu}\partial^2-\partial^\mu\partial^\nu)A_\nu+ (boundary\quad terms)
$$
is gauge invariant, but the gauge potential is not.
$$
A_\mu\rightarrow A_\mu+\partial_\mu\alpha(x)
$$
If we don't put constraint, the measure of DA will fluctuate without bound in the path integral. To solve this problem, we need to fix the gauge and pick a representative from it equivalent class C[A]. As for gauge , we have three well-known gauge:

1. $n^\mu \tilde{A}_{\mu}(k)=0$
2. $k^\mu \tilde{A}_\mu=0$, Lorenz gauge
3. $\vb{k}\cdot\vb{\tilde{A}}=0$,the Comlomb gauge

### $R_\xi$ gauge and F-P Trick

The form of gauge can be written as G(A)=0, with this mind, we have
$$
\int D\alpha \delta(G(A_\alpha))\det(\fdv{G(A^\alpha)}{\alpha})=1
\label{eq1}
$$
The ideal gauge G should satisfy

1. All the solutions of G(A)=0 are different (even after gauge transformation)
2. All the gauge potential A is equivalent to a solution of G

> It is hard to find a ideal gauge. To be checked.

We do not give a rigorous proof of $eq.\ref{eq1}$ here, we only assert that it can proved when the space is discretized and the proof can be generalized to infinite case.

We use gauge
$$
G(A)=\partial\cdot A+w(x),
$$
then $G(A_\alpha)=\partial\cdot A+w(x)+\partial_\mu \alpha$, thus we deduce that
$$
\fdv{G(A^\alpha)}{\alpha}=\partial^2
$$
Insert $eq.\ref{eq1}$ into path integral , we have
$$
\begin{align}
\int DA\mathcal{O}[A]\exp(iS[A])&=\int DA_\alpha D\alpha\mathcal{O}[A_\alpha]\exp(iS[A_\alpha])\det(\fdv{G(A_\alpha)}{\alpha})\delta(G(A_\alpha))\\
&=\det(\fdv{G(A_\alpha)}{\alpha})\int DA D\alpha \mathcal{O}[A]\exp(iS[A])\delta(G(A))
\end{align}
$$
Now we add a **soft constraint**, use Gaussian function to take the fluctuation of w(x) into our consideration
$$
1=N(\xi)\int Dw\exp(-i\int_x\frac{w^2}{2\xi})
$$
Insert this identity into $eq.8$, we obtain a modified Lagrangian
$$
\mathcal{L}_{GF}=-\frac{1}{4}F_{\mu\nu}F^{\mu\nu}-\frac{1}{2\xi}(\partial\cdot A)^2
$$

$$
\ev{\mathcal{O}[A]}=\frac{\int_C DA\mathcal{O}[A]\exp(iS_{GF})}{\int_C DA\exp(iS_{GF})}
$$

> Note that integrate over C means integrating over gauge inequivalent class .

### Propagator

Integrating by part, we have ($\int_k=\int\frac{d^4k}{(2\pi)^4}$)
$$
S_{GF}=\frac{1}{2}\int_k\tilde{A}_\mu(-\eta^{\mu\nu}k^2+k^\mu k^\nu-\frac{k^\mu k^\nu}{\xi})\tilde{A}_\nu=\frac{1}{2}\int_k\tilde{A}_\mu\tilde{A}_\nu B^{\mu\nu}
$$

$$
B_{\mu\nu}\tilde{D}^{\nu\rho}_F=i\delta_{\mu}^{\quad\nu}
$$

$$
\tilde{D}^{\mu\nu}_F=\frac{-i}{k^2+i\epsilon}(g^{\mu\nu}-(1-\xi)\frac{k^\mu k^\nu}{k^2})
$$

In this way we derive the propagator in momentum space.
