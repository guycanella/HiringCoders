
ent       = []
ent2      = []

for ui in us:
    aux1 = []
    aux2 = []
    for vi in vs:
        dens_dmrg = np.loadtxt(f'test/pq={P}/DensitiesU={ui}V={vi}')
        w2_dmrg = np.loadtxt(f'test/pq={P}/w2U{ui}V{vi}')
        aux_linear.append(np.mean(f.Linear(dens_dmrg,ui,w2=w2_dmrg)))
        aux_neumann.append(np.mean(f.LNeumann(dens_dmrg,ui,w2=w2_dmrg)))
    ent_linear.append(aux_linear)
    ent_neumann.append(aux_neumann)

