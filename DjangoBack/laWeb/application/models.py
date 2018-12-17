# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class Activite(models.Model):
    id = models.IntegerField(primary_key=True)
    titre = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    datedebut = models.CharField(db_column='dateDebut', max_length=255, blank=True, null=True)  # Field name made lowercase.
    datefin = models.CharField(db_column='dateFin', max_length=255, blank=True, null=True)  # Field name made lowercase.
    salle = models.CharField(max_length=255, blank=True, null=True)
    nombreplacedispo = models.IntegerField(db_column='nombrePlaceDispo', blank=True, null=True)  # Field name made lowercase.
    id_1 = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ACTIVITE'


class Animer(models.Model):
    id = models.IntegerField(primary_key=True)
    id_1 = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'ANIMER'
        unique_together = (('id', 'id_1'),)


class Article(models.Model):
    id = models.IntegerField(primary_key=True)
    nom = models.CharField(max_length=255, blank=True, null=True)
    prix = models.DecimalField(max_digits=15, decimal_places=2, blank=True, null=True)
    quantite = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ARTICLE'


class Atelier(models.Model):
    id_1 = models.IntegerField(primary_key=True)
    id = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ATELIER'


class Conference(models.Model):
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'CONFERENCE'


class Entrees(models.Model):
    id = models.IntegerField(primary_key=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    dateentree = models.CharField(db_column='dateEntree', max_length=50, blank=True, null=True)  # Field name made lowercase.
    heureentree = models.CharField(db_column='heureEntree', max_length=50, blank=True, null=True)  # Field name made lowercase.
    id_1 = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'ENTREES'


class EstDeType(models.Model):
    id = models.IntegerField(primary_key=True)
    id_1 = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'EST_DE_TYPE'
        unique_together = (('id', 'id_1'),)


class GererStock(models.Model):
    id = models.IntegerField(primary_key=True)
    id_1 = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'GERER_STOCK'
        unique_together = (('id', 'id_1'),)


class Membre(models.Model):
    id = models.IntegerField(primary_key=True)
    login = models.CharField(max_length=255, blank=True, null=True)
    mdp = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'MEMBRE'


class Organiser(models.Model):
    id = models.IntegerField(primary_key=True)
    id_1 = models.IntegerField()

    class Meta:
        managed = False
        db_table = 'ORGANISER'
        unique_together = (('id', 'id_1'),)


class Participer(models.Model):
    id = models.IntegerField(primary_key=True)
    id_1 = models.IntegerField()
    placerestante = models.IntegerField(db_column='placeRestante', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = False
        db_table = 'PARTICIPER'
        unique_together = (('id', 'id_1'),)


class President(models.Model):
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'PRESIDENT'


class RencontreProfessionnelle(models.Model):
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'RENCONTRE_PROFESSIONNELLE'


class Responsable(models.Model):
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'RESPONSABLE'


class Secretaire(models.Model):
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'SECRETAIRE'


class SoireeMiniProjet(models.Model):
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'SOIREE_MINI_PROJET'


class Sorties(models.Model):
    id = models.IntegerField(primary_key=True)
    description = models.CharField(max_length=255, blank=True, null=True)
    datesortie = models.CharField(db_column='dateSortie', max_length=50, blank=True, null=True)  # Field name made lowercase.
    heuresortie = models.CharField(db_column='heureSortie', max_length=50, blank=True, null=True)  # Field name made lowercase.
    id_1 = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'SORTIES'


class TournoisJeuxVideo(models.Model):
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'TOURNOIS_JEUX_VIDEO'


class Tresorier(models.Model):
    id = models.IntegerField(primary_key=True)

    class Meta:
        managed = False
        db_table = 'TRESORIER'


class TypeUtilisateur(models.Model):
    id = models.IntegerField(primary_key=True)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'TYPE_UTILISATEUR'


class Ufr(models.Model):
    id = models.IntegerField(primary_key=True)
    description = models.CharField(max_length=255, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'UFR'


class Utilisateur(models.Model):
    id = models.IntegerField(primary_key=True)
    nom = models.CharField(max_length=255, blank=True, null=True)
    prenom = models.CharField(max_length=255, blank=True, null=True)
    mail = models.CharField(max_length=250, blank=True, null=True)
    telephone = models.CharField(max_length=10, blank=True, null=True)
    abonnenewsletter = models.IntegerField(db_column='abonneNewsletter')  # Field name made lowercase.
    id_1 = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'UTILISATEUR'
