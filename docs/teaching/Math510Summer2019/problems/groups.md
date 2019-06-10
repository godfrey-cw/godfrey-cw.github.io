---
title: Group Theory
description: Group theory problems
---

Group Theory Problems
=====================

| Prelim exam                                                                                       | Problems |
|---------------------------------------------------------------------------------------------------|----------|
| [Spring 2019](https://math.washington.edu/sites/math/files/documents/grad/algprelim-spring19.pdf) | 1        |
| [Fall 2018](https://math.washington.edu/sites/math/files/documents/grad/algebra-sept-2018.pdf)    | 1, 2     |
| [2017](https://math.washington.edu/sites/math/files/documents/grad/algebra-2017.pdf)              | 4        |
| [2016](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2016.pdf)  | 1, 4     |
| [2015](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2015.pdf)  | N/A      |
| [2014](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2014.pdf)  | 1        |
| [2013](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2013.pdf)  | 1, 3     |
| [2012](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2012.pdf)  | N/A      |
| [2011](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2011.pdf)  | 1        |
| [2010](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2010.pdf)  | N/A      |
| [2009](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2009.pdf)  | N/A      |
| [2008](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2008.pdf)  | 3        |
| [2007](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2007.pdf)  | N/A      |
| [2006](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2006.pdf)  | 5, 7      |
| [2005](https://math.washington.edu/sites/math/files/documents/grad/prelim-exam-algebra-2005.pdf)  | TBD      |


# Hints

## 2016 Problem 1

**Possible reductoins**: reduce to showing that if $G$ is a finite
simple group all of whose proper subgroups are abelian, then $G$
has a non-trivial center, or the commutator $[G,G] \subset G$ is a
proper subgroup (it's not all of $G$).

## 2016 Problem 4

- **(a)** It will suffice to build a group $G$ of order 20 acting
  /faithfully/ on a set $X$ of order 5 (faithfully meaning that the
  associated homomorphism $\rho : G \to \mathrm{Perm}(X)$ is
  injective). One set with 5 elements is $\mathbb{F}_{5}$: can you
  find a group of order 20 acting faithfully on it?
  
- **(c)** What makes the "exotic" embedded copy of $S_{5}$ obtained
  in part (b) different from the "usual" ones?

## 2013 Problem 3

One approach for part (a) (probably overkill, I'd be interested to see a pared down version!):

- Show that the functor $\mathbf{Sub}(G) \to \mathbf{Orb}(G)$ taking a
  subgroup $H \subset G$ to the set of cosets $G/H$ is an equivalence
  of categories. Here $\mathbf{Sub}(G)$ has objects the subgroups $H
  \subset G$ and morphisms *conjugations* $c_{g}: H \to K$ taking $h
  \mapsto g h g^{-1}$, where $g \in G$. The objects of
  $\mathbf{Orb}(G)$ are *transitive $G$-sets* (aka $G$-*orbits*) and
  the morphisms are $G$-equivariant functions. If you took manifolds
  this might remind you of closed subgroups and homogeneous spaces.
  
- Use the above to show that conjugacy classes of subgroups correspond
  to isomorphism classes of transitive $G$-sets and index
  corresponds to rank. Also show that an index $n$ subgroup $H
  \subset G$ has at most $n$ conjugates.
  
- Finally show that the isomorphism classes of (not necessarily
  transitive) $G$-sets of cardinality $n$ are in 1-1 correspondence
  with 
  $$ 
  \mathrm{Hom}_{grp}(G, S_{n})/S_{n} 
  $$ 
  where $S_{n}$ acts on
  the right by conjugation (this is analogous to the 1-1
  correspondence of $n$-dimensional representations of $G$ with
  $\mathrm{Hom}_{grp}(G, GL_{n})$). Explain why $\mathrm{Hom}_{grp}(G,
  S_{n})/S_{n}$ is finite when $G$ is finitely generated.

One approach for (b):

- Show that there's a 1-1 correspondence between index $p$
  subgroups $H \subset G$ and 
  $$
  (\mathrm{Hom}_{grp}(G,
  \mathbb{Z}/p) \setminus \{0\})/(\mathbb{Z}/p)^{\times}, 
  $$
  the /non-zero/ homomorphisms $G \to \mathbb{Z}/p$, modulo the action
  of $(\mathbb{Z}/p)^{\times}$ by scaling.

- Calcaulate the cardinality of the above quotient set in terms of the
  rank of $\mathrm{Hom}_{grp}(G, \mathbb{Z}/p)$ over $\mathbb{Z}/p$, and figure out a description of that rank (say, in
  terms of an elementary factors decomposition of $G$).
- Tensor-hom adjunction (for the map $\mathbb{Z} \to \mathbb{Z}/p$) can improve our quality-of-life, if applied early on in this
  problem.


