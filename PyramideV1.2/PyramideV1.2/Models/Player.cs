using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PyramideV1._2.Models
{
    public class Player
    {
        public int id { get; set; }
        public string nom { get; set; }


        public int score { get; set; }

        public int nbPartie { get; set; }
        
        public int nbpart;

        public Player(int id, string nom, int score, int nbpart)
        {
            this.id = id;
            this.nom = nom;
          
            this.score = score;
            this.nbpart = nbpart;
        }

        
        public override string ToString()
        {
            return $"nom : {nom}" +
                $"id : {id}" +
                $"score :{score}" +
                $"nbPart : {nbPartie}";
        }
    }
}
